# NextJSTutorial
This Repository is for the projects and sections of the udemy tutorial "Next.js &amp; React - The Complete Guide (incl. Two Paths!)" by Maximilian Schwarzmüller.

## Notes
Not every section and project is done exactly the same way as Maximilian did in the course videos.

## How to Use
### Quickstart
Clone this repository and run
```
npm run start
```
to run the latest section project

### Start a section by choice
For example, typing the following will run the project in the folder "08-backend":
```
npm run 08
```
or
```
npm run 03
```
to start the 3rd section project.

Use any section number to run it.

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

"dummy-data.json" removed. I created an folder "api" beneath the components folder. This API Folder holds the async request to Firebase with transformation of the results. This API gets called in every page accessing events.

### Section 9
I did not use MongoDB to connect to a database, instead I used the flat-file database [StormDB](https://github.com/TomPrograms/stormdb). That way, I dont need to check any connections to external MongoDB-Servers. Go to the [Github-Project](https://github.com/TomPrograms/stormdb) if you want to know more about it.

## Important Notes
### Section 8
You need to rename or copy the file "feedback.example.json" to "feedback.json" in the data folder for the section 8 to work.

### General
You need to set up your own firebase projects and modify the links to your realtime database in sections 6 and 7 in the api/events.js file.

## License
MIT :)