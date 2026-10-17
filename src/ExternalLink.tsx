import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  href: HTMLAnchorElement['href'];
}>;

export default function ExternalLink({ href, children }: Props) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </a>
  );
}
