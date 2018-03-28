This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Description
Example for Lazy Loading Epics ([redux-observable](https://github.com/redux-observable/redux-observable) library)
related to this github issue: [issues/365](https://github.com/redux-observable/redux-observable/issues/365)

I picked React with typescript to build my example fully typed.
So Basically in this example i lazy load a react page "JobPage" which is a component.
and for the same lazy loaded page i lazy load an Epic (IncrementEpic).
I made sure that webpack create a separate chunk for the lazy loaded
page and its epics. Also i made sure to unload the epic when you leave the page.

Steps to test example:
----------------------
1. `clone repo`
2. `yarn install`
3. `yarn start`

then
When you boot the app the job page is lazyloaded with an Epic for Increment action.
If you enter the job page and you hit 'increment' you ll see 
an action in the redux dev-tools related to the 'increment-epic'.
Then if you leave the page 'job' to go in 'music' and you hit increment.
the action increment hit the reducer but don't trigger the increment epic.
etc... :) i hope it's enof explanation.

you can open an issue in this repo if you have a question.

Note:
This is my first time in React. I am more used to Angular.
be gentel :P and React Is cool :)

Special thanks to my friend [@aminpaks](https://github.com/aminpaks) who helped me to achieve the example.
