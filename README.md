# Facebook Issues: Github API implementation

Notes:

* I went with the issues api as opposed to using search because of the query limit, so we have about 30 issues loaded in this app; can load more by running through all pages of issues
* Was able to implement 3 keyboard shortcuts: toggle the issue in focus, bring up keyboard shortcuts, and focus on searchbar
* None of the components are very reusable, so I've kept everything in App.js except for the issues, knowing that a larger application would need better abstraction

Technology used: Bootstrap, MaterialUI

