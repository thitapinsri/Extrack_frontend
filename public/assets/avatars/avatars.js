const getAvatar = (pictureId) => {
  switch (pictureId) {
    case 0:
      return "/assets/avatars/bat.png";
      break;
    case 1:
      return "/assets/avatars/bear.png";
      break;
    case 2:
      return "/assets/avatars/cat.png";
      break;
    case 3:
      return "/assets/avatars/dog.png";
      break;
    case 4:
      return "/assets/avatars/gorilla.png";
      break;
    case 5:
      return "/assets/avatars/parrot.png";
      break;
    case 6:
      return "/assets/avatars/penguin.png";
      break;
    case 7:
      return "/assets/avatars/puffer-fish.png";
      break;
    case 8:
      return "/assets/avatars/sloth.png";
      break;
    case 9:
      return "/assets/avatars/zebra.png";
      break;
  }
};

export default getAvatar;