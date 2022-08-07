/** JFT Reference Page
 *
 * @param {String} jftSlug : represents the date of the JFT in DDMMYYYY format
 * @returns : JFT JSON object containing the JFT Markdown text
 *
 * JFT ReferencePage
 */

import { useRouter } from "next/router";

export default function JFTReferencePage() {
  const router = useRouter();
  const { jftSlug } = router.query;

  

  return <div>JFT Reference Page: {`${jftSlug}`}</div>;
}
