import { getMock } from "../mocks"

interface ICategory {
    title: string
    url: string
}

interface IArticle {
    id: number
    title: string
    author: string
    content: string
    category: ICategory
    image: string
    createAt: string
    allowComments: boolean
    status: 'public' | 'draft'
}

class ArticleDataService {
    private static instance: ArticleDataService;
    private constructor() { }
    private articles: {[key:string]: IArticle} = {}
    private navigation: Array<string> = []


    public static getInstance(): ArticleDataService {
        if (ArticleDataService.instance) {
            console.log("ArticleDataService new instance");
            ArticleDataService.instance = new ArticleDataService();
        }

        return ArticleDataService.instance
    }

    getNavigation() {
        if(Array.isArray(this.navigation) && this.navigation.length === 0) {
            this.navigation = getMock.articles.map(article => article.id)
        }
        return this.navigation
    }

    getArticle(id: number) {

    }
}

// The logic of the code is pretty simple. We are creating an instance of the class on
// creating only in case it is not created. In case it is already created we will use the
// current instance.