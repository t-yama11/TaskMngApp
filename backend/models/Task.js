export default class Task {
    constructor(id, content, priority = '中') {
        this._id = id;
        this._content = content;
        this._priority = priority;
    }

    get id() {
        return this._id;
    }

    get content(){
        return this._content;
    }

    set content(newContent){
        this._content = newContent;
    }

    get priority()
    {
        return this._priority;
    }

    set priority(newPriority)
    {
        const validPriorites = ['高', '中', '低'];
        if (validPriorites.includes(newPriority)){
            this._priority = newPriority;
        }else{
            throw new Error('無効な優先度です。高・中・低のいづれかを指定してください。');
        }
    }
}