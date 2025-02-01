"use client";

import { useEffect, useState } from "react";

export default function AGBPage() {


	const [isVisible, setIsVisible] = useState(true);

	// Check localStorage only on the client side
	useEffect(() => {
		const savedVisibility = localStorage.getItem("cookieConsentVisible");
		if (savedVisibility !== null) {
			const isVisibleFromStorage = JSON.parse(savedVisibility) as boolean;
			setIsVisible(isVisibleFromStorage);
		}
	}, []);

	// Save the state to localStorage whenever it changes
	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("cookieConsentVisible", JSON.stringify(isVisible));
		}
	}, [isVisible]);

	// Funktion zum Löschen von Cookies aus dem localStorage
	const clearCookies = () => {
		localStorage.removeItem("cookieConsentVisible");
		localStorage.clear();
		alert("Alle Cookies wurden gelöscht.");
	};


	return (
		<div className="min-h-screen bg-gray-50 py-8">
			<div className="container mx-auto px-4">
				{/* Page Title */}
				<h1 className="text-3xl font-bold text-center mb-8">Allgemeine Geschäftsbedingungen</h1>

				{/* Content Container */}
				<div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
					{/* Section: §1 Geltungsbereich */}
					<section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">§1 Geltungsbereich</h2>
						<p className="text-gray-700">
							Die folgenden AGB gelten für alle Geschäftsbeziehungen zwischen uns und dem Kunden.
						</p>
					</section>

					{/* Section: Registrierung und Nutzerkonto */}
					<section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">§2 Registrierung und Nutzerkonto</h2>
						<p className="text-gray-700">
							Die Nutzung von Vertragsmarkt setzt die Registrierung und Einrichtung eines Nutzerkontos voraus.
							Der Nutzer ist verpflichtet, bei der Registrierung wahrheitsgemäße Angaben zu machen und diese
							bei Bedarf aktuell zu halten. Der Nutzer ist für die Sicherheit seiner Login-Daten
							verantwortlich und muss diese geheim halten. Vertragsmarkt haftet nicht für Schäden, die durch
							Missbrauch der Login-Daten entstehen.
						</p>
					</section>
					<section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">§3 Nutzung des Portals</h2>
						<p className="text-gray-700">Der Nutzer verpflichtet sich, das Portal gesetzeskonform zu verwenden.</p>
					</section>

					{/* Section: Nutzung des Portals */}
					{/* Section: Vertragsübernahme */}
					<section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">§4 Vertragsübernahme</h2>

						<h3 className="text-lg font-semibold mb-2">4.1 Verpflichtung des Verkäufers</h3>
						<p className="text-gray-700">
							Der Verkäufer verpflichtet sich, den angebotenen Mobilfunkvertrag vollständig und rechtmäßig
							an den Käufer zu übertragen. Er garantiert, dass keine offenen Forderungen bestehen, die die
							Vertragsübernahme verhindern könnten.
						</p>

						<h3 className="text-lg font-semibold mt-4 mb-2">4.2 Verpflichtung des Käufers</h3>
						<p className="text-gray-700">
							Der Käufer verpflichtet sich, den gekauften Mobilfunkvertrag gemäß den Bedingungen des ursprünglichen
							Mobilfunkanbieters zu übernehmen. Er trägt sämtliche zukünftigen Zahlungsverpflichtungen und Gebühren.
						</p>

						<h3 className="text-lg font-semibold mt-4 mb-2">4.3 Rolle der Plattform</h3>
						<p className="text-gray-700">
							Die Plattform übernimmt die Abwicklung der Vertragsübernahme und stellt sicher, dass die Übertragung
							durch den Mobilfunkanbieter bestätigt wird. Sie haftet jedoch nicht für eventuelle ausstehende Forderungen
							oder Streitigkeiten zwischen Käufer und Verkäufer.
						</p>
					</section>

					{/* Section: Haftung */}
					<section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">§5 Haftung</h2>
						<p className="text-gray-700">
							Vertragsmarkt übernimmt keine Gewähr für die Korrektheit und Vollständigkeit der auf dem Portal
							veröffentlichten Informationen und haftet nicht für Schäden, die aus der Nutzung dieser
							Informationen entstehen.
						</p>
					</section>

					{/* Section: Rückbuchungen und Streitigkeiten bei PayPal-Zahlungen */}
					<section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">
							§6 Rückbuchungen und Streitigkeiten bei PayPal- und Stripe-Zahlungen
						</h2>
						<p className="text-gray-700">
							Im Falle von Rückbuchungen oder Streitigkeiten im Zusammenhang mit PayPal-/Stripe Zahlungen ist der
							Nutzer verpflichtet, Vertragsmarkt unverzüglich zu informieren und alle erforderlichen
							Informationen zur Klärung des Sachverhalts bereitzustellen. Vertragsmarkt wird sich bemühen, den
							Sachverhalt gemeinsam mit dem Nutzer und PayPal zu klären. Sollte der Nutzer eine unberechtigte
							Rückbuchung oder einen unberechtigten Einwand gegen eine Zahlung vorbringen, ist Vertragsmarkt
							berechtigt, Schadensersatzansprüche geltend zu machen und den Nutzer für die entstandenen Kosten
							und Aufwendungen in Rechnung zu stellen.
						</p>
					</section>

					{/* Section: Datenschutz */}
					{/* <section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">Datenschutz</h2>
						<p className="text-gray-700">
							Vertragsmarkt verpflichtet sich, die gesetzlichen Bestimmungen zum Datenschutz einzuhalten und
							die personenbezogenen Daten der Nutzer vertraulich zu behandeln. Die Verarbeitung der
							personenbezogenen Daten erfolgt ausschließlich zur Erfüllung der vertraglichen Leistungen und
							zur Verbesserung der angebotenen Dienste. Eine Weitergabe der personenbezogenen Daten an Dritte
							erfolgt nur im Rahmen der gesetzlichen Bestimmungen oder mit ausdrücklicher Zustimmung des
							Nutzers.
						</p>
					</section> */}

					{/* Section: Datenschutz und Cookies */}
					<section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">§7 Datenschutz & Cookies</h2>
						<p className="text-gray-700">
							Vertragsmarkt verpflichtet sich, die gesetzlichen Bestimmungen zum Datenschutz einzuhalten und
							die personenbezogenen Daten der Nutzer vertraulich zu behandeln. Die Verarbeitung der
							personenbezogenen Daten erfolgt ausschließlich zur Erfüllung der vertraglichen Leistungen und
							zur Verbesserung der angebotenen Dienste. Eine Weitergabe der personenbezogenen Daten an Dritte
							erfolgt nur im Rahmen der gesetzlichen Bestimmungen oder mit ausdrücklicher Zustimmung des
							Nutzers.
						</p>
						<h3 className="text-lg font-semibold mt-4 mb-2">7.1 Verwendung von Cookies</h3>
						<p className="text-gray-700">
							Unsere Plattform verwendet Cookies, um die Nutzererfahrung zu verbessern und wichtige
							Funktionen bereitzustellen. Durch die Nutzung der Plattform stimmen Sie der Verwendung von
							Cookies zu.
						</p>
						<h3 className="text-lg font-semibold mt-4 mb-2">7.2 Widerruf der Cookie-Einwilligung</h3>
						<p className="text-gray-700">
							Nutzer haben jederzeit die Möglichkeit, ihre Cookie-Einstellungen zu widerrufen und gespeicherte
							Cookies zu löschen. Klicken Sie dazu auf den folgenden Button:
						</p>
						<button
							onClick={clearCookies}
							className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
						>
							Cookies löschen
						</button>
					</section>

					{/* Section: Änderungen der AGB's */}
					<section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">§8 Änderungen der AGB</h2>
						<p className="text-gray-700">
							Vertragsmarkt behält sich das Recht vor, diese AGB's jederzeit und ohne Angabe von Gründen zu
							ändern. Der Nutzer wird über Änderungen der AGB's in geeigneter Form informiert. Die
							fortgesetzte Nutzung des Portals nach Änderungen der AGB's gilt als Zustimmung zu diesen
							Änderungen.
						</p>
					</section>

					{/* Section: Beendigung der Nutzung */}
					<section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">§9 Beendigung der Nutzung</h2>
						<p className="text-gray-700">
							Vertragsmarkt behält sich das Recht vor, den Zugang zum Portal jederzeit und ohne Angabe von
							Gründen zu beenden. In diesem Fall werden alle Daten des Nutzers gelöscht, es sei denn, es
							bestehen gesetzliche Aufbewahrungspflichten.
						</p>
					</section>

					{/* Section: Salvatorische Klausel */}
					<section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">§10 Salvatorische Klausel</h2>
						<p className="text-gray-700">
							Sollten einzelne Bestimmungen dieser AGB's unwirksam oder undurchführbar sein oder werden, so
							wird dadurch die Gültigkeit der übrigen Bestimmungen nicht berührt. Anstelle der unwirksamen
							oder undurchführbaren Bestimmung gilt eine solche für wirksam und durchführbar gehaltene
							Regelung als vereinbart, die dem wirtschaftlichen Zweck der unwirksamen oder undurchführbaren
							Bestimmung möglichst nahekommt. Die Parteien verpflichten sich, die unwirksame oder
							undurchführbare Bestimmung durch eine solche wirksame und durchführbare Bestimmung zu ersetzen.
						</p>
					</section>

					{/* Section: Anwendbares Recht und Gerichtsstand */}
					<section className="mb-8">
						<h2 className="text-xl font-semibold mb-4">§11 Anwendbares Recht und Gerichtsstand</h2>
						<p className="text-gray-700">
							Diese AGB's unterliegen dem Recht des Landes, in dem Vertragsmarkt seinen Sitz hat. In diesem
							Fall der Freistatt Sachsen. Im Falle von Streitigkeiten aus oder im Zusammenhang mit diesen
							AGB's oder der Nutzung des Portals, ist der Gerichtsstand der Sitz von Vertragsmarkt, sofern der
							Nutzer Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches
							Sondervermögen ist oder keinen allgemeinen Gerichtsstand im Inland hat.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}
