const getPartnerName = (users, loggedUser) => {
  const partnerName = users.find(user => user.email !== loggedUser)

  return partnerName;
}

export default getPartnerName;