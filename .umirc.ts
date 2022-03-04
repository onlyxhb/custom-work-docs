import { defineConfig } from 'dumi'

export default defineConfig({
  title: '工作文档',
  locales: [['zh-CN', '中文']],
  favicon: '//yun.duiba.com.cn/developer_new/images/new/icons/icon_jfsc.png',
  logo: '//yun.duiba.com.cn/developer_new/images/new/icons/icon_jfsc.png',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/custom-work-docs/',
  publicPath: '/custom-work-docs/',
  styles: [`.markdown a.beian { color: #b0b1ba; }`, `.markdown a.beian svg { display: none; }`],
  resolve: {
    includes: ['docs'],
    excludes: [],
    previewLangs: []
  }
})
