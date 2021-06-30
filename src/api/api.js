import { getAction, deleteAction, putAction, postAction } from '@/api/manage'

// 获取国际化JSON配置
const getLanguageJson = (params1, params2, params3) => getAction(`/local/public/i18n/${params1}/${params2}/${params3}`);

export {
  getLanguageJson
}