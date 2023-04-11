> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Progressive Enhancement

Ik heb dit project gebouwd volgens de principe van progressive enhancement. Progressive enhancement zorgt ervoor dat de belangerijkste delen van mijn website het altijd doet ongeacht welke browser of apparraat je gebruikt. Dit heb ik toegepast doormiddel van 3 lagen.

De eerste laag is het maken van de content layer. Een ander woord hiervoor is de core. De core is het html gedeelte gemixt met nodejs. Ik heb ervoor moeten zorgen dat dit gedeelte altijd werkt op elk browser of apparaat onafhankelijk van de css gedeelte. Voor het geval dat voor welke reden dan ook de css niet in kan laden is de html altijd werkend. De formulier om gebruikers iets te kunnen achterlaten op mijn website is in dit geval de core.

Mijn tweede is de presentation layer. Hierbij zorg ik ervoor de de formulier een opmaak krijgt en prettig is om naar te kijken. Dit doe ik doormiddel van css toe te voegen. De input veld pas ik hierin aan en de submite button. De submite button geef ik dezelfde stijl als de rest van de buttons op mijn website. De buttens van de oba zijn gebasseerd op de huisstijl.

Tot slot voeg ik een redirect toe om de User Experience te verbeteren. Als je succesvol de formulier hebt ingevult en hebt gesubmit word je door de redirect doorgestuurd naar een pagina waarin je te zien krijgt dat de afhadelijk succesvol is afgerond.

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
