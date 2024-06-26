import { useRouter } from "next/router";

const Recipe = () => {
    const router = useRouter()
    const { recipes, /*recipe_type */ } = router.query

    let label = "Next Recipe"
    let link = "/recipes/breakfast/HealthyBreakfast"

    if(recipes && recipes[2] === "HealthyBreakfast") {
        label = "Previous Recipe"
        link = "/recipes/breakfast/AnotherHealthyBreakfast"
    }

    return <div>
        Recipe: in {
            recipes && recipes.map((recipe: string, index: number) => {
                return <div key={index}>
                    <b>
                        {recipe}
                    </b>
                </div>
            })
        }
        <button onClick={() => router.push(link)}>
            {label}
        </button>
    </div>
}

export default Recipe