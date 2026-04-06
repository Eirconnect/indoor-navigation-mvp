# Indoor Navigation MVP

A mobile application that guides users from their current position within a site to an exact destination inside a building — seamlessly connecting outdoor and indoor navigation in one experience.

Built by Eirconnect.

---

## What this is

This is the frontend MVP for a navigation platform designed for complex environments such as universities, hospitals, airports, and large campuses.

It fills the gap left by tools like Google Maps, which get users to a location but not within it.

---

## What it does

- Search for a destination (room, building, or facility)
- Preview a route before navigating
- Follow step-by-step navigation with a visible path and animated user marker
- Navigate across outdoor areas, through building entrances, along corridors, and to exact rooms
- Confirm arrival

---

## MVP Scope

This is a demo prototype, not a production system.

- All data is hardcoded (locations, routes, coordinates)
- User movement is simulated along a fixed path
- No backend, no real-time positioning, no external APIs
- Map is rendered as a simplified indoor layout (SVG-based)

The goal is to demonstrate the navigation experience convincingly enough to support a pilot deployment.

---

## App Structure

| Screen | Purpose |
|---|---|
| Search | User enters a destination |
| Route Preview | Shows the route before navigation starts |
| Navigation | Animated step-by-step guidance with turn instructions |
| Arrival | Confirms the user has reached their destination |

---

## Target Pilot

Dublin City University (DCU) — starting with one building as a controlled proof of concept.

---

## Long-Term Vision

Once validated, the platform will ingest building data (including digital twins) to extract walkable paths, generate navigation graphs, and render accurate maps — scaling across universities, hospitals, airports, and retail environments.
