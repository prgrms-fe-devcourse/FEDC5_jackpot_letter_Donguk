import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAtomValue } from 'jotai';
import { z } from 'zod';
import Button from '@/components/Common/Button';
import useCreateUserPhoto from '@/hooks/api/useCreateUserPhoto';
import { userAtom } from '@/store/user';
import { theme } from '@/theme';
import { ImageSchema, NameSchema } from '@/utils/validation';
import ProfileImg from '../../Common/ProfileImg';
import * as Style from './index.style';

export interface FormValue {
  name?: string;
  image?: FileList;
}

function ProfileUpdate() {
  const { mutate: userPhotoMutate } = useCreateUserPhoto();
  const previewRef = useRef<HTMLImageElement>(null);

  const schema = z.object({
    ...ImageSchema.shape,
    ...NameSchema.shape
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValue>({
    resolver: zodResolver(schema)
  });

  const handleUpdateDataSubmit: SubmitHandler<FormValue> = async (data) => {
    if (data.image && data.image[0]) {
      userPhotoMutate({ isCover: false, image: data.image[0] });
    }

    reset();
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = [...e.target.files];
      const fileReader = new FileReader();

      fileReader.readAsDataURL(selectedFile[0]);

      fileReader.onload = () => {
        if (previewRef.current) {
          previewRef.current.src = fileReader.result as string;
        }
      };
    }
  };

  const userData = useAtomValue(userAtom);

  return (
    <Style.Container className="container">
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit(handleUpdateDataSubmit)}
        className="name-form"
      >
        <Style.ProfileImgWrap>
          <ProfileImg
            ref={previewRef}
            image={userData.image || ''}
            alt="user current profile image"
            width={9.375}
            height={9.375}
          />
          <div className="file-input-wrap">
            <input
              {...register('image', {
                onChange: handleProfileChange
              })}
              type="file"
              id="profile"
              accept="image/png, image/jpeg, image/png, image/webp"
            />
            <label
              htmlFor="profile"
              className="camera-button"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="SVGRepo_bgCarrier"
                  strokeWidth="0"
                ></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.342 4.985c.422-.724.633-1.085.927-1.348a2.5 2.5 0 0 1 .898-.516C9.542 3 9.96 3 10.797 3h2.405c.838 0 1.256 0 1.631.121a2.5 2.5 0 0 1 .898.516c.294.263.505.624.927 1.348L17.25 6H18c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C22 7.9 22 8.6 22 10v6c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C20.1 20 19.4 20 18 20H6c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 18.1 2 17.4 2 16v-6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 6 4.6 6 6 6h.75l.592-1.015zM12 17.05a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5zm2.7-4.75a2.7 2.7 0 1 1-5.4 0 2.7 2.7 0 0 1 5.4 0z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            </label>
          </div>
        </Style.ProfileImgWrap>
        <ErrorMessage
          errors={errors}
          name="image"
          render={({ message }) => <p className="warning-text">{message}</p>}
        />
        <div className="input-wrap">
          <Button
            content="수정"
            type="submit"
            onClick={handleSubmit(handleUpdateDataSubmit)}
            styleOption={{
              height: '3.5rem',
              width: '100%',
              fontSize: theme.typography.mypage_regular.fontSize
            }}
          />
        </div>
      </form>
    </Style.Container>
  );
}

export default ProfileUpdate;
