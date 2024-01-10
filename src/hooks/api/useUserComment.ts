import { useQueries } from '@tanstack/react-query';
import { getPostDetail } from '@/api/post';
import { Post, User, UserComment } from '@/types/ResponseType';

function useUserComment(userData: User) {
  return useQueries({
    queries:
      userData && userData._id !== ''
        ? userData.comments.map((commentItem) => {
            return {
              queryKey: ['post', commentItem.post] as const,
              queryFn: () => {
                return getPostDetail(commentItem.post);
              },
              select: (data: Post): UserComment => {
                const { title, comment } = JSON.parse(commentItem.comment);
                const { title: postAuthor, content } = JSON.parse(data.title);

                const response = {
                  ...commentItem,
                  commentAuthor: title,
                  comment,
                  image: data.author.image || '',
                  postAuthor,
                  postContent: content
                };

                return response;
              },
              staleTime: Infinity
            };
          })
        : [],
    combine: (results) => {
      return {
        data: results.map((result) => {
          return result.data;
        }),
        pending: results.some((result) => {
          return result.isPending;
        })
      };
    }
  });
}

export default useUserComment;
