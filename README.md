# Madgiraffestudios.com-
Art Portfolio For MadGiraffeStudios


Dev Process for getting issues merged to main

Creating a Branch for the project:

- Clone the repository
- Do a git pull from main if your local machine is not up to date with what is in main currently
- Create a new branch while on main - git checkout -b "branchname" || Use this pattern: 
    - if this is feature do " git checkout -b feature/MGS121-AddNewFontStyle"
    - if this is not a feature do "git checkout -b tmp/MGS121-UpdateHomeButtonColor"
    - Note that the number next to MGS is generic, but we will start with 120, 121, 122 and so on - in that order. Make sure this number hasn't been used yet, consult with the team
    - Make sure the number is at 3 digits min/max
    - This is the branch you should push your code up to - not main
    - Do a git branch on your local, to confirm you are not making changes on main
    
    ***Do not push to main without a PR review***
    
Pull Request Process:
 - Once you've pushed your branch up to the repo, made all your commits and you're done with your work
 - Switch to the branch you created in the drop down and click on Pull Request as shown in the image below
![image](https://user-images.githubusercontent.com/22583143/87214893-ba38fc80-c2fe-11ea-9ca9-6a5632b55788.png)
- Add a title relating to what the change is about in the top field
- In the big text area, list out an overview of the changes in your PR
- Click "create pull request at the bottom

