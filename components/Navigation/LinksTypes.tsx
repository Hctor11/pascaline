export interface Link {
    name: string;
    submenu: boolean;
    sublink: SubLinksContainer[];
  }
  
export interface SubLinksContainer {
    head: string;
    mySubLinks: SubLinks[];
  }
  
export interface SubLinks {
    name: string;
    link: string;
  }