export interface NavLink {
  id: string;
  label: string;
  href: string;
  isPrimary?: boolean;
}

export interface FooterLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterSection {
  id: string;
  title?: string;
  links: FooterLink[];
}
