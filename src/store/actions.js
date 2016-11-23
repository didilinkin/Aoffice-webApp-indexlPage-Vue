// Action 跟 mutation 类似
// Mutation 修改状态，action 则提交（一个或多个） mutation
// Action 可以随意包含异步操作。
import Vue from 'vue'
import axios from 'axios' 
import * as types from './mutations'

export const addState = ({commit}) => {
    axios.post('./data.json', {
        // code: ''
    })
    .then(function (response) {
        let get_data = response.data
        commit('addState',get_data)
    })
    .catch(function (error) {
        console.log(error);
    });
}