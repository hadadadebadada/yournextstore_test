export default function WiderrufPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8">Widerrufsbelehrung</h1>

                <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold mb-4">Widerrufsrecht</h2>
                        <p className="text-gray-700">
                            Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
                            Die Widerrufsfrist beträgt 14 Tage ab dem Tag,
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                            <li>
                                an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren
                                in Besitz genommen haben bzw. hat.
                            </li>
                            <li>
                                an dem Sie oder ein von Ihnen benannter Dritter die letzte Ware oder Teillieferung
                                erhalten haben.
                            </li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Vertragsmarkt UG (haftungsbeschränkt), Gustav Adolf Straße 7, 01219 Dresden, E-Mail: info@vertragsmarkt.de) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">Folgen des Widerrufs</h2>
                        <p className="text-gray-700">
                            Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben,
                            einschließlich der Lieferkosten (mit Ausnahme zusätzlicher Kosten durch eine andere als die
                            Standardlieferung), unverzüglich und spätestens binnen 14 Tagen ab Eingang des Widerrufs
                            zurückzuzahlen.
                        </p>
                        <p className="text-gray-700 mt-2">
                            Wir verwenden dasselbe Zahlungsmittel wie bei der ursprünglichen Transaktion, es sei denn, es wurde
                            ausdrücklich etwas anderes vereinbart.
                        </p>
                        <p className="text-gray-700 mt-2">
                            Wir können die Rückzahlung verweigern, bis wir die Ware zurückerhalten haben oder Sie den Nachweis
                            erbracht haben, dass Sie die Waren zurückgesandt haben.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">Rücksendung der Waren</h2>
                        <p className="text-gray-700">
                            Sie haben die Waren spätestens binnen 14 Tagen ab dem Tag, an dem Sie uns über den Widerruf informieren,
                            zurückzusenden an:
                            <br />
                            <strong>Vertragsmarkt UG – Kennwort: Widerruf<br />
                                Gustav Adolf Straße 7<br />
                                01219 Dresden</strong>
                        </p>
                        <p className="text-gray-700 mt-2">Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">Ausschluss des Widerrufsrechts</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>
                                Waren, die nach Kundenspezifikation angefertigt wurden oder eindeutig auf persönliche
                                Bedürfnisse zugeschnitten sind.
                            </li>
                            <li>Schnell verderbliche Waren oder Waren mit kurzer Haltbarkeit.</li>
                            <li>Versiegelte Waren, die aus Gründen der Hygiene nicht zur Rückgabe geeignet sind.</li>
                            <li>Ton-/Videoaufnahmen oder Software in versiegelter Verpackung, wenn sie geöffnet wurde.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">Muster-Widerrufsformular</h2>
                        <p className="text-gray-700">
                            (Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus und senden Sie es zurück.)
                        </p>
                        <pre className="bg-gray-100 text-gray-800 p-4 rounded mt-2 whitespace-pre-wrap">
                            {`An Vertragsmarkt UG (haftungsbeschränkt)
Gustav Adolf Straße 7
01219 Dresden
E-Mail: info@vertragsmarkt.de

Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/ 
die Erbringung der folgenden Dienstleistung (*)

— Bestellt am (*) / erhalten am (*)
— Name des/der Verbraucher(s)
— Anschrift des/der Verbraucher(s)
— Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)
— Datum

(*) Unzutreffendes streichen.`}
                        </pre>
                    </section>
                </div>
            </div>
        </div>
    );
}
