FSB Assessment

Scenario:

1.  Go to google site
2.  Search for the keyword 'Test Automation Learning'
3.  Select the link with Udemy course
4.  Verify if the Udemy site has opened
5.  Search for BDD with Cucumber
6.  Click on the course with highest rating from the list of search results
    Task: Automate the above scenario given using JS and any tool (WebdriverIO or Selenium). The Project should be shared as a GitHub project. Each automation step should have assertions''

Thought Process:

In order to write an automation tests for this scenario I had to think about what elements are needed. For the first step, opening the google page is pretty straight forward but in order for the assertion, it is needed to check if the page is the correct one. There are many ways to do this but what seemed to make the most sense was just checking if the title contained the string "Google".
Following up, in order to search for a the key phrase "Test Automation Learning" was a matter of grabbing the google search (gSearch) bar and searching for the key phrase. To assert this step the URL was checked to see that the phrase was contained inside, ensuring the test was on the right page.
Next, inspecting the links the simplest way would be check which contain "Udemy" using the \*= CSS selector (without the \, doesn't seem to want to leave) .
Using the same element, it is clicked and asserted by ensuring the URL is the same as the expected URL
Using a similar method to searching with Google, "BDD with Cucumber" was searched and again checked by asserting the URL contained the search phrase.
Finally to click on the course with the highest rating a few things needed to get done. Clicking on the drop down menu, selecting the "Highest Rated" dropdown option and then clicking on the first result. This was then asserted by checking if the title of the page was the same as expected.
This scenario could have been completed in just the e2e file but a page file was added to showcase the ability to link and organize components.

Blockers

The main blocker that I had was once you reach some sites like Udemy a security software is in place to prevent spam and bots access the page. This made it difficult to complete the final step. In order to work around this I attempted to make a new test file which directly brought you to the required page but this didn't work either. Even if you paused the browser for a minute or so and allowed yourself to bypass the system but this still wouldn't work. Futhermore since I could not test my last bit of code properly I would have liked to see and work through other solutions for selecting the first element when the options are filtered by hightest rated in order to make my code more efficient.
