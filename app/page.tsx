import axios from "axios";
async function getUserDetails() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
	return response.data;
}
export default async function Home() {
  const userDeatils = await getUserDetails();
  return (
    <div>
      hey there
      {userDeatils.email}
      {userDeatils.name}

    </div>
  );
}
