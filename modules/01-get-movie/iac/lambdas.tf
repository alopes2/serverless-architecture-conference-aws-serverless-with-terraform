module "get-movie-lambda" {
  source           = "./modules/lambda"
  name             = "get-movie"
  source_file_path = "./lambda_init_code/index.mjs"
}
