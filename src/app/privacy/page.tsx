import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/links";

const UPDATED = "October 13, 2026";

export const metadata: Metadata = {
  title: "Privacy policy — ROOMIE",
  description:
    "What data ROOMIE collects, what we use it for, where it is stored and how to ask us to delete it.",
  robots: { index: true, follow: true },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-9 mt-9 border-t border-white/[0.09] first:border-0 first:mt-0 first:pt-0">
      <h2 className="font-sora font-bold text-[21px] sm:text-[23px] tracking-[-0.02em] leading-tight mb-4">
        {title}
      </h2>
      <div className="flex flex-col gap-4 text-[16.5px] leading-[1.7] text-ink-secondary">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[rgba(15,23,42,0.86)] backdrop-blur-[10px] border-b border-hairline">
        <nav className="max-w-[1320px] mx-auto px-4 sm:px-8 h-[68px] flex items-center justify-between gap-4">
          <Link
            href="/exchange"
            className="flex items-center gap-2.5 no-underline shrink-0"
          >
            <Image
              src="/roomie_profile.png"
              alt="ROOMIE"
              width={32}
              height={32}
              className="rounded-full block w-7 h-7 sm:w-8 sm:h-8"
            />
            <span className="font-sora font-bold text-[15px] sm:text-[17px] tracking-[0.15em] text-ink">
              ROOMIE
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/privacidad"
              className="text-[#9AA7C2] no-underline text-[14.5px] font-medium hover:text-ink transition-colors"
            >
              Español
            </Link>
            <Link
              href="/exchange"
              className="text-[#9AA7C2] no-underline text-[14.5px] font-medium hover:text-ink transition-colors"
            >
              Back to site
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-[1320px] mx-auto px-4 sm:px-8 py-16 lg:py-24">
        <div className="max-w-[680px]">
          <p className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-amber mb-5">
            Last updated: {UPDATED}
          </p>

          <h1 className="font-sora font-extrabold text-[34px] sm:text-[46px] tracking-[-0.04em] leading-[1.04] mb-6">
            Privacy policy
          </h1>

          <p className="text-[17.5px] sm:text-[19px] leading-[1.65] text-[#C7D0E4] mb-14">
            It is written in plain language and it is short, because we collect
            very little. If anything is unclear, write to us and we will explain
            it.
          </p>

          <Section title="What we collect">
            <p>
              <strong className="text-ink font-semibold">Your email</strong>, if
              you join the waiting list. It is the only thing this site stores on
              its own: the form asks for no name, no phone number, nothing else.
            </p>
            <p>
              <strong className="text-ink font-semibold">
                Whatever you tell us
              </strong>
              , if you message us on WhatsApp, send an email or book a call. That
              may include your name, your phone number, when you arrive in
              Montevideo or what you are looking for. Only what you choose to
              share.
            </p>
            <p>
              <strong className="text-ink font-semibold">
                Your answers to our Google Forms
              </strong>
              , if you filled in one of our surveys.
            </p>
          </Section>

          <Section title="What we do NOT collect">
            <p>
              This site{" "}
              <strong className="text-ink font-semibold">
                uses no cookies
              </strong>
              . There is no Google Analytics, no Meta pixel, no social network
              pixel and no tracker of any kind. We do not follow your browsing,
              we do not build a profile of you and we do not show you ads based
              on what you do here.
            </p>
            <p>
              That is also why you will not see a cookie banner: there is nothing
              to accept.
            </p>
          </Section>

          <Section title="What we use it for">
            <p>
              To let you know when we open access, to reply if you wrote to us,
              and to understand what students arriving in Montevideo need while
              we build the product.
            </p>
            <p>
              <strong className="text-ink font-semibold">Nothing else.</strong>{" "}
              We do not sell, rent or hand over your data to anyone, and we will
              not send you third party advertising.
            </p>
          </Section>

          <Section title="Where it is stored">
            <p>
              We rely on third party services to operate, and your data passes
              through them:
            </p>
            <ul className="flex flex-col gap-3 mt-1">
              {[
                ["Formspree", "receives and stores the waiting list emails."],
                ["Google", "Forms for surveys, Calendar for calls and Gmail for our contact inbox."],
                ["Meta", "WhatsApp, if you message us there."],
                ["Vercel", "hosts this site and, like any web server, logs technical access data."],
              ].map(([name, detail]) => (
                <li
                  key={name}
                  className="grid grid-cols-[auto_1fr] gap-x-3 items-baseline"
                >
                  <span className="font-sora font-bold text-[14px] text-amber">
                    ·
                  </span>
                  <span>
                    <strong className="text-ink font-semibold">{name}</strong>{" "}
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
            <p>
              These companies are based outside Uruguay and each has its own
              privacy policy. We have no control over how they handle data beyond
              what we send them.
            </p>
          </Section>

          <Section title="How long we keep it">
            <p>
              Your email stays on the list until you ask us to delete it, or
              until the project no longer exists. If we ever shut ROOMIE down, we
              delete the list.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              Uruguay&apos;s{" "}
              <strong className="text-ink font-semibold">
                Personal Data Protection Act (Ley 18.331)
              </strong>{" "}
              gives you the right to ask us, free of charge, what data of yours
              we hold, to correct it if it is wrong, to update it, or to delete
              it.
            </p>
            <p>
              To exercise any of those rights, write to{" "}
              <a
                href={CONTACT_MAILTO}
                className="text-amber no-underline font-semibold border-b border-amber/40 pb-px hover:text-ink hover:border-ink transition-colors"
              >
                {CONTACT_EMAIL}
              </a>{" "}
              and we will reply. You do not need to tell us why.
            </p>
            <p>
              The authority that oversees this in Uruguay is the Personal Data
              Regulation and Control Unit (URCDP), and you can file a complaint
              with them if we handle your request badly.
            </p>
          </Section>

          <Section title="Minors">
            <p>
              ROOMIE is intended for university students. If you are under 18 and
              gave us your data without permission from a parent or guardian,
              write to us and we will delete it.
            </p>
          </Section>

          <Section title="Who is responsible">
            <p>
              ROOMIE is a project under development, based in Montevideo,
              Uruguay. The person responsible for the database can be reached at{" "}
              <a
                href={CONTACT_MAILTO}
                className="text-amber no-underline font-semibold border-b border-amber/40 pb-px hover:text-ink hover:border-ink transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>

          <Section title="Changes">
            <p>
              If we change anything in this policy, we update the date above. If
              the change is significant and we have your email, we will tell you.
            </p>
          </Section>
        </div>
      </main>

      <Footer lang="en" />
    </>
  );
}
