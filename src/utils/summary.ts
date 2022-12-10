/**
 * 本文からHTMLを削除しつつ先頭140文字を抽出する関数
 * カードコンポーネントで用いる想定
 *
 * @param  {string} content
 * @returns string
 */
export default function summary(content: string | undefined): string {
  return content ? content.replace(/(<([^>]+)>)/gi, '').substring(0, 140) : ''
}
