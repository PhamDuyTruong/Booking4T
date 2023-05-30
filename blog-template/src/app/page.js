import styles from "./page.module.css";
import blogs from "../data/blogs.json";
import BlogCard from "@/components/blog/BlogCard";

export default function Home() {
  return (
    <main className={styles.main}>
      {blogs.map((elem, index) => {
        return <BlogCard key={index} index={index} {...elem} />;
      })}
    </main>
  );
}
