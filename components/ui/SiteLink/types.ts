export interface SiteLinkProps {
  linkType: 'scroll' | 'link';
  isAccent: boolean;
  href: string;
  children: string;
  className?: string;
}
