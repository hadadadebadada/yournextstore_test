export default function ImpressumPage() {
	return (
		<div className="min-h-screen bg-gray-50 py-8">
			<div className="container mx-auto px-4">
				{/* Page Title */}
				<h1 className="text-3xl font-bold text-center mb-8">Impressum</h1>

				{/* Content Container */}
				<div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
					{/* Section: Angaben gemäß § 5 DDG */}
					<section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 DDG</h2>
						<p className="text-gray-700">
							Vertragsmarkt UG
							<br />
							Gustav Adolf Straße 7
							<br />
							01219 Dresden
						</p>
					</section>

					{/* Section: Kontakt */}
					<section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">Kontakt</h2>
						<p className="text-gray-700">
							Telefon: +49 (0) 0177 2266449
							<br />
							E-Mail: info@vertragsmarkt.de
						</p>
					</section>

					{/* Section: Umsatzsteuer-ID */}
					<section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">Umsatzsteuer-ID</h2>
						<p className="text-gray-700">
							Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
							<br />
							DE6813302268
						</p>
					</section>

					{/* Section: EU-Streitschlichtung */}
					<section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">EU-Streitschlichtung</h2>
						<p className="text-gray-700">
							Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
							<a
								href="https://ec.europa.eu/consumers/odr"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:underline"
							>
								https://ec.europa.eu/consumers/odr
							</a>
							. Unsere E-Mail-Adresse finden Sie oben im Impressum.
						</p>
					</section>

					{/* Section: Verbraucherstreitbeilegung/Universalschlichtungsstelle */}
					<section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">
							Verbraucherstreitbeilegung/Universalschlichtungsstelle
						</h2>
						<p className="text-gray-700">
							Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
							Verbraucherschlichtungsstelle teilzunehmen.
						</p>
					</section>

					{/* Section: Haftung für Inhalte */}
					<section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">Haftung für Inhalte</h2>
						<p className="text-gray-700">
							Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den
							allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch
							nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
							Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
							<br />
							<br />
							Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
							Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
							der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
							Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
						</p>
					</section>

					{/* Section: Haftung für Links */}
					<section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">Haftung für Links</h2>
						<p className="text-gray-700">
							Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
							haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
							Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
							verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
							Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
							erkennbar.
							<br />
							<br />
							Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
							Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
							werden wir derartige Links umgehend entfernen.
						</p>
					</section>

					{/* Section: Urheberrecht */}
					<section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">Urheberrecht</h2>
						<p className="text-gray-700">
							Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
							deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
							Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
							jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
							nicht kommerziellen Gebrauch gestattet.
							<br />
							<br />
							Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
							Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
							Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
							entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
							umgehend entfernen.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}
