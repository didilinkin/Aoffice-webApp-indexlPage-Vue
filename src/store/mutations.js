// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation

// increment (state, n) { state.count += n }
export const addState = (state,res) => {
  state.BuildingList.push(res.buildingList) // 推楼盘列表数据
}