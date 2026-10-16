import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  /** CSS aspect-ratio, e.g. "4 / 5" */
  ratio: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** A cropped image box with a fixed aspect ratio. */
export function Media({ src, alt, ratio, className = "", sizes = "100vw", priority }: Props) {
  return (
    <div className={`img ${className}`} style={{ aspectRatio: ratio }}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
    </div>
  );
}
