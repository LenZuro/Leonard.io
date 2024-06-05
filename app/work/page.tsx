import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

async function Stars() {
  let res = await fetch("https://api.github.com/repos/vercel/next.js");
  let json = await res.json();
  let count = Math.round(json.stargazers_count / 1000);
  return `${count}k stars`;
}

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">My Work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Through my work I have worn a lot of hats in differnt industries that
          I feel give me the advantage to morph and perform in so many markets
          and facets that the tech industry offers.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          ProvidWell
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Jr Front-End Developer, 2023 - Present
        </p>
        <p>
          In this role I worked and collaborated with the designers and other
          developers to work and grow their new web platform.
        </p>
        <ul>
          <li>
            As a team we worked to develop the vision of the desginers and added
            new components and visuals to the companys new site.
          </li>
          <li>
            One of the my main responsibilities was to ensure the sites SEO
            using best practices and procedures so that the runtime of the site
            was as perfect as it could be.
          </li>
        </ul>
        <p>
          Here I have been able to hobe my skills and gain better practical
          understanding of how to work as a team, and how to have ownership of
          projects through its many stages of project life.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Cartel Roasting Co
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Warehouse & Logistics Manager, 2021 - 2023
        </p>
        <p>
          My position as the Warehouse and Logistics Manager was the overall
          responsibility of the department to ensure that we are getting all
          products to our stores and wholesale customers in a timely and safe
          way.
        </p>
        <p>
          In this role I was able to grow and learn skills when it come to
          e-commerce and CMS managment. As well has being able to lead and
          direct new proejcts that benefited not only my deparment but the
          company as a whole.
        </p>
        <p>
          My time spent here was a great learning experince at how to manage a
          team and ensure the goals of the company were being met in ways seen
          and unseen.
        </p>
      </div>
    </section>
  );
}
