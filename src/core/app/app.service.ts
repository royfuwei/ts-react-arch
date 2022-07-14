import { NavPageConfig } from "../../domain/interface/common";

export class AppService {
    async getApp(): Promise<{
        name: string
    }> {
        return {
            name: 'ts-react-arch',
        };
    }

    async getNavPageConfig(): Promise<NavPageConfig[]> {
        const pages: NavPageConfig[] = [
            {
              key: 'home',
              name: 'Home',
              path: '/',
            },
            {
              key: 'resume',
              name: 'Resume',
              path: '/resume',
            },
            {
              key: 'project',
              name: 'Projects',
              path: '/project',
            },
          ];
        return pages;
    }
}