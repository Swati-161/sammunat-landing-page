# Sammunat LLC | Internship Landing Page Project

## Project Overview
This project was developed as part of my internship application for **Sammunat LLC**. The goal was to take a standard corporate template and transform it into a high-end, modern agency landing page that reflects the brand's identity.

I spent significant time refining the visual hierarchy, ensuring that the "Electric Blue" accent colors pop against the dark slate background without overwhelming the user.

## Project Structure
* `/src/components`: Reusable React components (Header, Footer, Hero, etc.)
* `/src/App.css`: Centralized stylesheet containing all global variables and component styles.
* `/public`: Static assets and branding.

> **Note on Styling**: For this initial version, I have kept the entire CSS codebase within `App.css`. This was a conscious decision to ensure strict brand consistency across all components using global variables. I plan to modularize this into separate component-level CSS files as the project scales.

## Key Design Decisions
Unlike a standard boilerplate, I made several custom styling choices to elevate the professional feel:
* **Interactive Navigation**: Implemented a smooth-scroll "Return to Top" feature on the header brand name. I restored a custom silver-glass gradient using `background-clip: text` to ensure the logo remains visually striking while becoming functional.
* **UX Improvements**: Removed default link underlines from the "We are Hiring" badge to make it feel like a clean, interactive UI element rather than a standard text link.
* **Balanced Layout**: Adjusted the Services section into a symmetrical 2x2 grid to ensure the visual weight matches the rest of the site's sections.
* **Defensive UX (Form Control)**: Restricted the contact form's message box to vertical resizing only. This prevents users from accidentally breaking the site's layout while still allowing them enough room to review long messages.
* **Performance**: Optimized the React build for fast loading on Netlify.

## Experience the Site
**Live Demo:** [https://sammunat-llc.netlify.app](https://sammunat-llc.netlify.app)

## Tech I Used
* **React.js**: For the component-based architecture.
* **Modern CSS**: Using CSS Variables (`:root`) for easy theme management and Flexbox/Grid for responsiveness.
* **Git/GitHub**: For version control and professional workflow.
* **Netlify**: For Continuous Deployment (CI/CD).

## How to Run This Locally
If you'd like to check out the code on your own machine:

1. Clone this repo: `git clone https://github.com/swati-161/sammunat-landing-page.git`
2. Install the bits: `npm install`
3. Launch it: `npm start`

---
**Maintained by [Swati Nim](https://github.com/swati-161)**