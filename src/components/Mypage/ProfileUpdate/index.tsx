import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '@/components/Common/Button';
import Input from '@/components/Common/Input';
import ProfileImg from '../ProfileImg';
import * as Style from './index.style';

export interface FormValue {
  name: string;
  email: string;
  age: string;
}

function ProfileUpdate() {
  const registerSchema = z.object({
    name: z.string().min(2).max(16)
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValue>({
    resolver: zodResolver(registerSchema)
  });

  const handleNameSubmit: SubmitHandler<FormValue> = (data) => {
    console.log(data);
  };

  return (
    <Style.Container id="dd">
      <Style.ProfileImgWrap>
        <ProfileImg
          image="https://cdn.pixabay.com/photo/2023/11/29/11/55/pine-hills-8419433_640.jpg"
          alt="user current profile image"
          width={9.375}
          height={9.375}
        />
        <button className="camera-button">
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
        </button>
      </Style.ProfileImgWrap>
      <form
        onSubmit={handleSubmit(handleNameSubmit)}
        className="name-form"
      >
        <div className="input-wrap">
          <Input
            width="100%"
            height="3rem"
            type="text"
            label="이름"
            register={register}
            value="name"
            required
          />
          {errors.name && (
            <span className="warning-text">
              이름은 2자 이상 16자 이하로 입력해주세요
            </span>
          )}
        </div>

        <Button
          content="수정"
          type="submit"
          onClick={handleSubmit(handleNameSubmit)}
        />
      </form>
    </Style.Container>
  );
}

export default ProfileUpdate;
