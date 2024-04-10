import { Suspense } from "react";

export const metadata = {
  title: "Guestbook",
  description: "Sign my guestbook and let me know you were here! ",
};

export default function GuestbookPage() {
  return (
    <section>
      <h1>sign my guestbook!</h1>
      <Suspense></Suspense>
    </section>
  );
}
