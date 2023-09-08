//types

export type ts_sportsObj ={
    "id":number, 
    "title":string
}//분리함

// "구기 종목":[ {"id":1, "title":"축구"}...
export type ts_sports ={
    [key:string]:ts_sportsObj[]
}

