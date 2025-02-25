-- CreateTable
CREATE TABLE "tbl_users" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "tbl_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_user_passwords" (
    "id" UUID NOT NULL,
    "password" TEXT NOT NULL,
    "user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "tbl_user_passwords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_user_password_history" (
    "id" UUID NOT NULL,
    "password" TEXT NOT NULL,
    "is_current_pass" BOOLEAN NOT NULL DEFAULT true,
    "user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "tbl_user_password_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_users_id_key" ON "tbl_users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_users_email_key" ON "tbl_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_user_passwords_id_key" ON "tbl_user_passwords"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_user_passwords_user_id_key" ON "tbl_user_passwords"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_user_password_history_id_key" ON "tbl_user_password_history"("id");

-- AddForeignKey
ALTER TABLE "tbl_user_passwords" ADD CONSTRAINT "tbl_user_passwords_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tbl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_user_password_history" ADD CONSTRAINT "tbl_user_password_history_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tbl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
