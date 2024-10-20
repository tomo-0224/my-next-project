import Image from "next/image";
import Category from "../Category";
import Date from "../Date";
import styles from "./index.module.css";
import type { News } from "@/app/_libs/microcms";
import Link from "next/link";

type Props = {
  data: News;
};
export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className={styles.title}></h1>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.meta}>
        <Link
          href={`/news/category/${data.category.id}`}
          className={styles.categoryLink}
        >
          <Category category={data.category} />
        </Link>

        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          alt=""
          className={styles.thumbnail}
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
    </main>
  );
}
