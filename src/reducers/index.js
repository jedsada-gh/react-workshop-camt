export default (
  state = {
    itemMovieDetail: {},
    isShowDialog: false
  },
  action
) => {
  switch (action.type) {
    case 'click_item':
      return {
        isShowDialog: true,
        itemMovieDetail: action.payload
      };
    case 'dismiss_dialog':
      return {
        isShowDialog: false,
        itemMovieDetail: {}
      };
    default:
      return state;
  }
};
