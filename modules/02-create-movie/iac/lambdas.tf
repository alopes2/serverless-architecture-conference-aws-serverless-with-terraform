module "get_movie_lambda" {
  source           = "./modules/lambda"
  name             = "get-movie"
  source_file_path = "./lambda_init_code/index.mjs"
  policies         = [data.aws_iam_policy_document.get_movie_item.json]
}

module "create_movie_lambda" {
  source           = "./modules/lambda"
  name             = "create-movie"
  source_file_path = "./lambda_init_code/index.mjs"
  policies         = [data.aws_iam_policy_document.create_movie_item.json]
}
