import Image from "next/image";
import cardStyle from "./BlogCard.module.css";
import Link from "next/link";

const BlogCard = ({ index, title, thumbnail, description }) => {
  return (
    <div className={cardStyle.blogCardContainer}>
      <div className={cardStyle.imageContainer}>
        <Image
          src={thumbnail}
          alt={"Thumbnail image " + index}
          fill
        />
      </div>
      <div className={cardStyle.textContainer}>
        <h1>{title}</h1>
        <p>
          {description}
          {"... "}
          <Link href={"#"} className={cardStyle.readMore}>
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
