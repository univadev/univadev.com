import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  CalendarDays,
  ExternalLink,
  Github,
  Hash,
  UsersRound,
} from "lucide-react";
import { CertificateDownloadButton } from "@/components/ravenhacksvtl/certificate-download-button";
import {
  getRavenHacksCertificate,
  ravenHacksCertificates,
} from "@/data/ravenhacksvtl-certificates";

type CertificateDetail = {
  label: string;
  value?: string;
  values?: string[];
  icon: LucideIcon;
};

type CertificatePageProps = {
  params: Promise<{
    projectName: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return ravenHacksCertificates.map((certificate) => ({
    projectName: certificate.slug,
  }));
}

export async function generateMetadata({
  params,
}: CertificatePageProps): Promise<Metadata> {
  const { projectName } = await params;
  const certificate = getRavenHacksCertificate(projectName);

  return {
    title: certificate
      ? `${certificate.projectName} Certificate | Raven Hacks VTL`
      : "Certificate | Raven Hacks VTL",
    description: "Private Raven Hacks VTL certificate page.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function RavenHacksCertificatePage({
  params,
}: CertificatePageProps) {
  const { projectName } = await params;
  const certificate = getRavenHacksCertificate(projectName);

  if (!certificate) {
    notFound();
  }

  const details: CertificateDetail[] = [
    {
      label: "Project",
      value: certificate.projectName,
      icon: Award,
    },
    {
      label: "Team",
      values: certificate.teamMembers,
      icon: UsersRound,
    },
    {
      label: "Issued",
      value: certificate.issueDate,
      icon: CalendarDays,
    },
    {
      label: "Certificate ID",
      value: certificate.certificateId,
      icon: Hash,
    },
  ];
  const projectLinks = [
    certificate.devpostUrl
      ? {
          label: "Devpost",
          href: certificate.devpostUrl,
          icon: ExternalLink,
        }
      : null,
    certificate.githubUrl
      ? {
          label: certificate.githubLabel ?? "GitHub",
          href: certificate.githubUrl,
          icon: Github,
        }
      : null,
  ].filter(Boolean);

  return (
    <div className="certificate-page-shell min-h-screen bg-[linear-gradient(180deg,#f7f7f7_0%,#ffffff_62%,#fff3ed_100%)] px-4 py-8 text-black sm:px-6 lg:px-10">
      <style>
        {`
          @media print {
            @page {
              size: Letter landscape;
              margin: 0;
            }

            body {
              background: #ffffff !important;
            }

            .certificate-no-print {
              display: none !important;
            }

            .certificate-page-shell {
              min-height: auto !important;
              padding: 0 !important;
              background: #ffffff !important;
            }

            .certificate-print-wrap {
              max-width: none !important;
              padding: 0 !important;
            }

            .certificate-paper {
              width: 11in !important;
              height: 8.5in !important;
              max-width: none !important;
              box-shadow: none !important;
              border: 0 !important;
            }
          }
        `}
      </style>

      <main className="certificate-print-wrap mx-auto flex w-full max-w-6xl flex-col items-center gap-6">
        <div className="certificate-no-print flex w-full max-w-[11in] flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="mb-1 text-sm font-semibold text-[#ff7f50]">
              Private certificate link
            </p>
            <h1 className="text-2xl font-bold tracking-normal text-gray-900 sm:text-3xl">
              {certificate.projectName}
            </h1>
            {certificate.projectDescription ? (
              <p className="mb-0 mt-3 max-w-2xl text-sm text-gray-700">
                {certificate.projectDescription}
              </p>
            ) : null}
            {projectLinks.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {projectLinks.map((link) => {
                  if (!link) {
                    return null;
                  }

                  const Icon = link.icon;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex max-w-full items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-900 transition-colors hover:border-[#ff7f50] hover:text-[#ff7f50] hover:no-underline"
                    >
                      <Icon className="h-4 w-4 flex-none" />
                      <span className="truncate">{link.label}</span>
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>
          <CertificateDownloadButton certificate={certificate} />
        </div>

        <article
          aria-label={`${certificate.projectName} certificate`}
          className="certificate-paper relative w-full max-w-[11in] overflow-hidden rounded-lg border border-gray-200 bg-white p-5 shadow-2xl sm:p-7 md:p-10"
          style={{ aspectRatio: "11 / 8.5" }}
        >
          <div className="absolute inset-x-0 top-0 h-2 bg-[#ff7f50]" />
          <div className="pointer-events-none absolute inset-4 rounded-lg border-2 border-gray-900 sm:inset-6" />
          <div className="pointer-events-none absolute inset-7 rounded-md border border-gray-200 sm:inset-10" />

          <div className="relative z-10 flex h-full flex-col">
            <header className="flex items-start justify-between gap-4 border-b border-gray-200 px-3 pb-4 pt-1 sm:px-4 sm:pb-6">
              <div className="flex min-w-0 items-center gap-3">
                <Image
                  src="/univadev.svg"
                  alt="Univa Dev"
                  width={64}
                  height={64}
                  priority
                  className="h-12 w-12 sm:h-14 sm:w-14"
                />
                <span className="text-base font-bold text-gray-900 sm:text-lg">
                  Univa Dev
                </span>
              </div>
              <div className="min-w-0 shrink-0 pl-2 text-right sm:pl-4">
                <p className="mb-0 whitespace-nowrap text-sm font-bold leading-tight text-gray-900 sm:text-base">
                  {certificate.eventName}
                </p>
                <p className="mb-0 whitespace-nowrap text-xs leading-tight text-gray-500 sm:text-sm">
                  {certificate.eventDates}
                </p>
              </div>
            </header>

            <section className="flex flex-1 flex-col items-center justify-center py-4 text-center sm:py-6">
              <p className="mb-3 text-sm font-medium text-gray-500 sm:text-base">
                This certificate is presented to
              </p>
              <h2 className="mb-4 max-w-full break-words text-4xl font-bold tracking-normal text-gray-900 sm:text-5xl md:text-6xl">
                {certificate.recipientName}
              </h2>
              <div className="mb-6 h-1 w-40 rounded-full bg-[#ff7f50] sm:w-56" />
              <p className="mb-5 text-lg font-bold uppercase tracking-normal text-[#ff7f50] sm:text-2xl md:text-3xl">
                {certificate.recognition}
              </p>
              <p className="mb-0 max-w-3xl text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg">
                {certificate.achievement}
              </p>
            </section>

            <section
              aria-label="Certificate details"
              className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
            >
              {details.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={detail.label}
                    className="min-w-0 rounded-lg border border-gray-200 bg-gray-50 p-3 sm:p-4"
                  >
                    <div className="mb-2 flex items-center gap-2 text-[#ff7f50]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <p className="mb-0 text-xs font-bold uppercase">
                        {detail.label}
                      </p>
                    </div>
                    {detail.values ? (
                      <ul className="mb-0 flex min-w-0 list-none flex-col gap-0.5 p-0 text-sm font-bold leading-tight text-gray-900 sm:text-[13px]">
                        {detail.values.map((value) => (
                          <li
                            key={value}
                            className="min-w-0 break-words [overflow-wrap:anywhere]"
                          >
                            {value}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mb-0 min-w-0 break-words text-sm font-bold leading-snug text-gray-900 [overflow-wrap:anywhere] sm:text-[15px]">
                        {detail.value}
                      </p>
                    )}
                  </div>
                );
              })}
            </section>

            <footer className="mt-4 flex justify-center pt-3 sm:mt-4 sm:pt-4">
              <div className="text-center">
                <p className="mb-0 text-sm font-bold text-gray-900 sm:text-base">
                  <span
                    className="text-2xl font-normal sm:text-4xl"
                    style={{
                      fontFamily:
                        '"Brush Script MT", "Segoe Script", cursive',
                    }}
                  >
                    {certificate.signerName}
                  </span>
                </p>
                <div className="mx-auto mb-3 mt-1 h-px w-40 bg-gray-900 sm:w-60" />
                <p className="mb-0 text-xs text-gray-500 sm:text-sm">
                  {certificate.signerTitle}
                </p>
              </div>
            </footer>
          </div>
        </article>
      </main>
    </div>
  );
}
