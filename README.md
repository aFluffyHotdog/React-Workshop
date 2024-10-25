# React Workshop Guild
This repo contains all the resources we used during the frontend workshop for IEEE Newhacks 2024

We build the following Apps as Milestones

* Milestone 1: A counter in HTML (Only the structure, the counter does not work!)
* Milestone 2: Counter using React and style it using Tailwind CSS
* Milestone 3: Exchange rate App by fetching API
* Milestone 4: A password strength checker


## 1. Setup
1. Create a new folder on your laptop
2. `cd` into the new folder
3. Run `git clone https://github.com/guaaaaa/React_workshop_final.git`
4. Run `cd Reac_workshop_final/workshop/my-project`
5. Run `npm install`
6. Run `npm run dev`. You should be able to see the App at http://localhost:3000 after running this command

## 2. Repo structure
The repository has four branches - `master`, `HTML`, `counter`, `exchange`, and `password`. Each branch corresponds to a milestone for the workshop

#### The `master` branch
The `master` branch contains all four Apps you built during the workshop. If you run `npm run dev`, you should see the following page, and you should be able to navigate around the three Apps

<img width="1122" alt="Screenshot 2024-10-23 at 16 46 11" src="https://github.com/user-attachments/assets/d7c82a74-9f3f-45db-a9ad-41c91c58ccce">

To navigate to the `master` branch, run `git checkout master`


### The `HTML` branch
The `HTML` branch only contains an HTML file. You should see the following page after opening it.

Technically, the `workshop/my-project` directory still exists, but you do not need to worry about it at all

<img width="1200" alt="Screenshot 2024-10-23 at 16 52 08" src="https://github.com/user-attachments/assets/d7a82251-5516-4b27-b11c-e1bc23bd4bc8">

To navigate to the `HTML` branch, run `git checkout HTML`


### The `counter` branch
The `counter` branch contains the counter App. If you run `npm run dev`, you should see the following page. You can play around with the counter!

<img width="897" alt="Screenshot 2024-10-23 at 17 06 21" src="https://github.com/user-attachments/assets/33897b59-59c0-4565-83f4-473e1298e94c">

To navigate to the `counter` branch, run `git checkout counter`


### The `exchange` branch
The `exchange` branch contains a home page, the counter App and the exchange rate App. If you run `npm run dev`, you should see the following page, and you should be able to navigate around the Apps and the home page

<img width="811" alt="Screenshot 2024-10-23 at 17 02 36" src="https://github.com/user-attachments/assets/7cb3478f-62bf-4dc5-a552-d19da7f775f0">

The API used for the exchange rate App is from - https://manage.exchangeratesapi.io

Please create your own account from that website and replace the API key in `workshop/my-project/app/exchange/page.tsx` with your own access key!!! Otherwise, the App may fail if the given API access key limit is reached

To navigate to the `exchange` branch, run `git checkout exchange`


### The `password` branch
It's exactly the same as the `master` branch, Idk why it should exist

## 3. Final project

The final App should has the following pages

* Home page
<img width="1003" alt="Screenshot 2024-10-25 at 14 10 59" src="https://github.com/user-attachments/assets/e076b10d-a328-42b1-be7a-b0d687860bf4">

* Counter
<img width="1394" alt="Screenshot 2024-10-25 at 14 11 31" src="https://github.com/user-attachments/assets/f41d93e3-5fee-4f01-a090-962635f662c5">

* Exchange rate App
<img width="1416" alt="Screenshot 2024-10-25 at 14 12 36" src="https://github.com/user-attachments/assets/3ae2c74c-a827-4b15-85a3-806fb41b19f2">

* Password strength checker
<img width="1419" alt="Screenshot 2024-10-25 at 14 13 08" src="https://github.com/user-attachments/assets/7638100c-7891-40d9-9b21-99101c235837">

