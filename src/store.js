import { createStore } from "redux";
import Maskan from "./assets/images/maskan.png";

const initialState = {
  currentUserToken: "ABCD1234",
  currentUser: 0,
  currentUserVerified: false,
  currentUserName: "رضا حسینی",
  page: "Dashboard",
  mobileActivation: "login",
  credit: 0,
  selectedCredit: "-",
  changeCryptoFrom: "-",
  changeCryptoTo: "-",
  cards: [
    {
      shaba: "1467986653997975798643608",
      card: "1467986539979757",
      image: Maskan,
      verified: true,
    },
    {
      shaba: "2467986653997975798645608",
      card: "1467986539979757",
      image: Maskan,
      verified: true,
    },
    {
      shaba: "3467986653997975788643608",
      card: "1467986539979757",
      image: Maskan,
      verified: true,
    },
    {
      shaba: "4467986653997975718643608",
      card: "1467986539979757",
      image: Maskan,
      verified: true,
    },
  ],
  cardEditMode: false,
  editShaba: "",
  selectedCrypto: "",
  dark: true,
  tradeModal: false,
  orderCurrentTab: "buy",
  userValidationStart: false,
};

const changeState = (state = initialState, { type, ...rest }) => {
  if (type === "set") {
    return { ...state, ...rest };
  } else if (type === "SET_TOKEN") {
    return Object.assign({}, state, { currentUserToken: rest.currentUserToken });
  } else if (type === "SET_USER") {
    return Object.assign({}, state, { currentUser: rest.currentUser });
  } else if (type === "SET_PAGE") {
    return Object.assign({}, state, { page: rest.page });
  } else if (type === "mobileActivation") {
    return Object.assign({}, state, { mobileActivation: rest.status });
  } else if (type === "SET_CREDIT") {
    return Object.assign({}, state, { credit: rest.credit });
  } else if (type === "SET_selectedCredit") {
    return Object.assign({}, state, { selectedCredit: rest.credit });
  } else if (type === "SET_changeCryptoFrom") {
    return Object.assign({}, state, { changeCryptoFrom: rest.from });
  } else if (type === "SET_changeCryptoTo") {
    return Object.assign({}, state, { changeCryptoTo: rest.to });
  } else if (type === "SET_CARDS") {
    return Object.assign({}, state, { cards: rest.cards });
  } else if (type === "SET_cardEditMode") {
    return Object.assign({}, state, { cardEditMode: rest.cardEditMode });
  } else if (type === "SET_editShaba") {
    return Object.assign({}, state, { editShaba: rest.editShaba });
  } else if (type === "SET_SELECTED_CRYPTO") {
    return Object.assign({}, state, { selectedCrypto: rest.selectedCrypto });
  } else if (type === "SET_DARK") {
    return Object.assign({}, state, { dark: rest.dark });
  } else if (type === "SET_USER_VERIFIED") {
    return Object.assign({}, state, { currentUserVerified: rest.verified });
  } else if (type === "SET_USER_NAME") {
    return Object.assign({}, state, { currentUserName: rest.user_name });
  } else if (type === "SET_tradeModal") {
    return Object.assign({}, state, { tradeModal: rest.status });
  } else if (type === "SET_orderCurrentTab") {
    return Object.assign({}, state, { orderCurrentTab: rest.tab });
  } else if (type === "START_VALIDATION") {
    return Object.assign({}, state, { userValidationStart: rest.start });
  } else {
    return state;
  }
};

const store = createStore(changeState);
export default store;
