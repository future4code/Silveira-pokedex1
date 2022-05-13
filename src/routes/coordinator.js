export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToPokedex = (navigate) => {
    navigate("/pokedex")
}

export const goToDetails = (navigate, id) => {
    navigate(`/details/${id}`)
}

export const goToPage = (navigate, page) => {
    navigate(`?page=${page}`)
}

export const goToError= (navigate) => {
    navigate("*")
}

export const goBack = (navigate) => {
    navigate(-1)
} 