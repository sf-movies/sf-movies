# Git "Forking Workflow"

Here are the steps to out Git Forking Workflow:

## Getting Set Up

<ol>
  <li>First you must fork the project repository which can be found
  [here](https://github.com/sf-movies/sf-movies).</li>
  <li>Then use `git clone` to clone the repository to your local machine.</li>
  <li>This workflow requires <b>two remote</b> branches. Use `origin` as the name of the remote for your forked repository (this is automatically creates when you run `git clone`) and `upstream` for the project repository. You must add the project repository by using the command</li>:

  ```
    git remote add upstream https://github.com/sf-movies/sf-movies
  ```
</ol>

#### Developers work on their features

In the local repositories that they cloned, developers can edit code, commit changes, and create branches.

```
  git checkout -b <feature-branch-name>
  # Edit some code
  git add
  git commit -m <commit-message>
```

All of their changes will be private until they push it to their public repository. And, if the official project has moved forward, they can access new commits with `git pull --rebase`:

```
  git pull --rebase upstream dev
```

#### Developers publish their features

Once a developer is ready to share their new feature, they need to do two things. First, they have to make their contribution accessible to other developers by pushing it to their public repository. Their origin remote should already be set up, so all they should have to do is the following:

```
  git push origin <feature-branch-name>
```

Second, they need to notify the scrum master that they want to merge their feature into the official codebase. Typically, you’ll want to integrate your feature branch into the upstream remote’s dev branch.

#### The scrum master integrates their features

When the scrum master receives the pull request, his job is to decide whether or not to integrate it into the official codebase. To do this, he (or a developer he delegates the task to) will pull the code into their local repository. The scrum master needs to `fetch` the feature branch from the developer's server-side repository into his own local repository after checking out a review branch for the specific review in question.

```
  git fetch https://github.com/user/repo <feature-branch-name>
```

If he finds problems with the developer's changes, the scrum master will comment on the developer's pull request regarding what problems exist. Then the developer can make further changes to resolve the problems and perform another `git add` and `git commit`.

When no problems exist in the changes, the scrum master can merge those changes with the dev branch of the official repository. When he feels that the code is suitable for publication, he will merge the official dev branch with the official master branch.

#### Developers synchronize with the official repository
Since the main codebase has moved forward, other developers should synchronize with the official repository:

```
  git pull --rebase upstream dev
```

### Example Workflow

In local branch `dev`:

```
  git pull --rebase upstream dev
  git checkout -b <feature-branch-name>
  # Make changes
  git add <file-name>
  git commit -m <commit-message-header>
  git push origin <feature-branch-name>
  # Submit pull request to official respository *dev* branch
  # Include commit message **body** (See below)
  # Once change has been accepted:
  git pull --rebase upstream dev
```
