import './globals.css';

export const metadata = {
  title: '\u6f84\u6f84\u5ba0\u7269\u6d17\u62a4 | \u5ba0\u7269\u6d17\u6fa1\u7f8e\u5bb9\u62a4\u7406',
  description:
    '\u6f84\u6f84\u5ba0\u7269\u6d17\u62a4\u63d0\u4f9b\u732b\u72d7\u6d17\u6fa1\u3001\u7f8e\u5bb9\u4fee\u526a\u3001\u76ae\u6bdb\u62a4\u7406\u3001SPA \u548c\u4e0a\u95e8\u63a5\u9001\u9884\u7ea6\u670d\u52a1\u3002',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
