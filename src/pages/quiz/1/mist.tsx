import Layout from "../../../layout/main";
import HMeta from "../../../content/hmeta";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import Scolloer from "../../../content/scolloer";
import { useRouter } from "next/router";
import Link from "next/link";

export default function MIST() {
    const [typingStatus, setTypingStatus] = useState(0);
    const router = useRouter();
    const { load } = router.query;
    const Content = () => {
        return (
            <>
                ソーンダイク警部 : ジョン博士は、このペットボトルからコップへ水を注ぎ、<br />
                睡眠薬を過剰に溶かして飲み過ぎ、その結果中毒症状により死亡した<br />
                <br />
                ソーンダイク警部 : ──────アインハードさん、彼に睡眠薬を提供していたのはあなただと聞いているが……そもそも何故彼は睡眠薬を？<br />
                <br />
                アインハード : はい。彼は極度のストレスによる不眠症を患っておりました。<br />
                理由としては、ミリアが博士の理想通りに使われなかった為でしょう<br />
                <br />
                ソーンダイク警部 : あぁ。それについては聞き及んではいる。<br />
                確か、人のサポートを主目的として開発されたミリアだが、<br />
                初の自己成長する汎用AIという便利性から、犯罪から軍事利用までされて、<br />
                訴訟寸前にまでなってたな。誹謗中傷もかなりあったとか<br />
                <br />
                アインハード : はい。そのためジョン様は心の病を患い、<br />
                市場には出回らない程の、強力な睡眠薬を服用なさっていました。<br />
                本来睡眠薬は、悪用防止のため、水に溶かすと濃い青色になります。<br />
                しかし今回博士に渡していたのは、特に強力な物のため、赤色に染まります<br />
                <br />
                主人公 : つまり、このコップの赤色の跡は、<br />
                その睡眠薬を水に溶かしたからという訳ですね。誤飲の可能性はなさそう<br />
                <br />
                ソーンダイク警部 : だろうな。だとしたらこの謎のメモは関係ないのか？<br />
                ジョン博士のよくわからない研究のメモかもしれないが……<br />
                <br />
                主人公 : ミリアにでも聞いてみますか？彼女なら分かるかも<br />
                ミリア : はい。なんでしょう<br />
                ソーンダイク警部 : 静かにしろ。ここは人間様のやる事だ<br />
            </>
        )
    }
    return (
        <Layout>
            <HMeta pageDescription="cid謎解き in CIDEXPO2024" />
            <div
                onClick={() => {
                    setTypingStatus(2);
                }}>
                {/** 2回目以降は?load=trueでアニメーション停止 */}
                <p>(タップでスキップ)</p>
                <Scolloer>
                    {load ?
                        (
                            <Content />
                        )
                        : (
                            typingStatus == 2 ? (
                                <Content />
                            ) : (
                                <div>
                                    <TypeAnimation
                                        style={{ whiteSpace: 'pre-line', display: 'block' }}
                                        sequence={[
                                            `ソーンダイク警部 : ジョン博士は、このペットボトルからコップへ水を注ぎ、
                                            睡眠薬を過剰に溶かして飲み過ぎ、その結果中毒症状により死亡した」
                                            
                                            ソーンダイク警部 : ──────アインハードさん、彼に睡眠薬を提供していたのはあなただと聞いているが……そもそも何故彼は睡眠薬を？」
                                            
                                            アインハード : はい。彼は極度のストレスによる不眠症を患っておりました。
                                            理由としては、ミリアが博士の理想通りに使われなかった為でしょう
                                            
                                            ソーンダイク警部 : あぁ。それについては聞き及んではいる。
                                            確か、人のサポートを主目的として開発されたミリアだが、
                                            初の自己成長する汎用AIという便利性から、犯罪から軍事利用までされて、
                                            訴訟寸前にまでなってたな。誹謗中傷もかなりあったとか
                                            
                                            アインハード : はい。そのためジョン様は心の病を患い、
                                            市場には出回らない程の、強力な睡眠薬を服用なさっていました。
                                            本来睡眠薬は、悪用防止のため、水に溶かすと濃い青色になります。
                                            しかし今回博士に渡していたのは、特に強力な物のため、赤色に染まります
                                            
                                            主人公 : つまり、このコップの赤色の跡は、
                                            その睡眠薬を水に溶かしたからという訳ですね。誤飲の可能性はなさそう
                                            
                                            ソーンダイク警部 : だろうな。だとしたらこの謎のメモは関係ないのか？
                                            ジョン博士のよくわからない研究のメモかもしれないが……
                                            
                                            主人公 : ミリアにでも聞いてみますか？彼女なら分かるかも
                                            ミリア : はい。なんでしょう
                                            ソーンダイク警部 : 静かにしろ。ここは人間様のやる事だ
                                            
						            `,
                                            () => {
                                                setTypingStatus(2);
                                            }
                                        ]}
                                        cursor={false}
                                        speed={70}
                                    />
                                </div>
                            )
                        )}
                </Scolloer>
                {typingStatus == 2 ? (
                    <div style={{
                        padding: "3vh 20px",
                        textAlign: "center",
                    }}>
                        <div>
                            謎解き開始
                        </div>
                        <div>
                            <Link href={"https://f22ba092.github.io/MASTAR/EXPO_Keyword/index.html"}>
                                JAN コードの暗号を解読しろ
                            </Link>
                        </div>
                    </div>
                ) : ("")}
            </div>
        </Layout>
    )
}