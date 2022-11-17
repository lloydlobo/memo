import Image from "next/image";

/**
 * loaderGetInitialsAvatar is a loader for Image loading.
 * @param {string} {src
 * @param {number} width
 * @param {number} quality}
 * @returns {string}
 */
// https://nextjs.org/docs/api-reference/next/image
function loaderGetInitialsAvatar({
  src,
  width,
  quality,
}: {
  src: string;
  width?: number;
  quality?: any;
}): string {
  return `https://avatars.dicebear.com/api/initials/${src}.svg`;
}

/**
 * UserInitialsAvatar return avatar img of user's initials.
 * @returns {JSX.Element}
 */
export default function UserInitialsAvatar({
  props,
  firstName = "John",
  secondName = "Doe",
}: any): JSX.Element {
  return (
    <Image
      loader={loaderGetInitialsAvatar}
      src={`${firstName}+${secondName}`}
      alt={"User Initials Avatar"}
      width={16 * 26}
      height={16 * 26}
      className={"m-0 rounded-full p-0"}
    />
  );
}
