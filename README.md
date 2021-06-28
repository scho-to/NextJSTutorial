# NextJSTutorial
This Repository is for the projects and sections of the udemy tutorial "Next.js &amp; React - The Complete Guide (incl. Two Paths!)" by Maximilian Schwarzmüller.

## Notes
Not every section and project is done exactly the same way as Maximilian did in the course videos.

## Modifications
### Section 4
Got rid of the EventSummary component and put the h2 header into the EventLogistics component. It was already there as imageAlt prop.

CSS files modified. The EventSummary wasn't nice with all screen sizes, so I removed it completely.

### Section 6
my Decisions:
- Home Page: Filtered Events Page, Path: / -> getStaticProps with every filtered Event pre-generated with a revalidation of at most once every 10 seconds.
- All Events Page, Path: /events -> getServerSideProps, as the Events could be very dynamic.
- Event Detail Page, Path: /events/[id] -> getStaticProps with revalidation of 5 seconds and getStaticPaths for every featrued Event with fallback enabled.
- Filtered Event Page, Path: /events/[...slug] -> getServerSideProps

"dummy-date.json" removed. I created an folder "api" beneath the components folder. This API Folder holds the async request to Firebase with transformation of the results. This API gets called in every page accessing events.