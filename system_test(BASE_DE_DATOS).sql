/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.4.24-MariaDB : Database - system_test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`system_test` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `system_test`;

/*Table structure for table `actividades` */

DROP TABLE IF EXISTS `actividades`;

CREATE TABLE `actividades` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `precio_por_persona` decimal(10,2) NOT NULL,
  `indicador_popularidad` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `actividades` */

LOCK TABLES `actividades` WRITE;

insert  into `actividades`(`id`,`titulo`,`descripcion`,`fecha_inicio`,`fecha_fin`,`precio_por_persona`,`indicador_popularidad`,`created_at`,`updated_at`) values (1,'Tour Histórico','Un recorrido por los sitios históricos más importantes de la ciudad.','2024-01-01','2024-01-31',50.00,85,NULL,NULL),(2,'Clase de Cocina','Aprende a cocinar platos típicos con un chef profesional.','2024-02-01','2024-02-28',75.00,90,NULL,NULL),(3,'Excursión de Senderismo','Una caminata guiada por los hermosos senderos naturales de la región.','2024-03-01','2024-03-31',40.00,70,NULL,NULL),(4,'Clase de Yoga','Relájate y mejora tu flexibilidad con nuestras clases de yoga.','2024-04-01','2024-04-30',30.00,60,NULL,NULL),(5,'Tour Gastronómico','Descubre los mejores restaurantes y platillos de la ciudad.','2024-05-01','2024-05-31',80.00,95,NULL,NULL),(6,'Tour Histórico 2','','0000-00-00','0000-00-00',0.00,0,NULL,NULL),(7,'Tour Histórico2','Un recorrido por los sitios históricos más importantes de la ciudad.','2024-01-01','2024-01-31',60.00,90,NULL,NULL);

UNLOCK TABLES;

/*Table structure for table `actividades_relacionadas` */

DROP TABLE IF EXISTS `actividades_relacionadas`;

CREATE TABLE `actividades_relacionadas` (
  `actividad_id` bigint(20) unsigned NOT NULL,
  `actividad_relacionada_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`actividad_id`,`actividad_relacionada_id`),
  KEY `actividades_relacionadas_actividad_relacionada_id_foreign` (`actividad_relacionada_id`),
  CONSTRAINT `actividades_relacionadas_actividad_id_foreign` FOREIGN KEY (`actividad_id`) REFERENCES `actividades` (`id`),
  CONSTRAINT `actividades_relacionadas_actividad_relacionada_id_foreign` FOREIGN KEY (`actividad_relacionada_id`) REFERENCES `actividades` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `actividades_relacionadas` */

LOCK TABLES `actividades_relacionadas` WRITE;

UNLOCK TABLES;

/*Table structure for table `comentarios` */

DROP TABLE IF EXISTS `comentarios`;

CREATE TABLE `comentarios` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `actividad_id` bigint(20) unsigned NOT NULL,
  `usuario_id` bigint(20) unsigned NOT NULL,
  `comentario` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `valoracion` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comentarios_actividad_id_foreign` (`actividad_id`),
  KEY `comentarios_usuario_id_foreign` (`usuario_id`),
  CONSTRAINT `comentarios_actividad_id_foreign` FOREIGN KEY (`actividad_id`) REFERENCES `actividades` (`id`),
  CONSTRAINT `comentarios_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `comentarios` */

LOCK TABLES `comentarios` WRITE;

UNLOCK TABLES;

/*Table structure for table `failed_jobs` */

DROP TABLE IF EXISTS `failed_jobs`;

CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `failed_jobs` */

LOCK TABLES `failed_jobs` WRITE;

UNLOCK TABLES;

/*Table structure for table `migrations` */

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `migrations` */

LOCK TABLES `migrations` WRITE;

insert  into `migrations`(`id`,`migration`,`batch`) values (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2019_12_14_000001_create_personal_access_tokens_table',1),(5,'2024_11_22_042300_create_actividades_table',1),(6,'2024_11_22_042327_create_reservas_table',1),(7,'2024_11_22_042345_create_actividades_relacionadas_table',1),(8,'2024_11_22_042406_create_usuarios_table',1),(9,'2024_11_22_042511_create_comentarios_table',1);

UNLOCK TABLES;

/*Table structure for table `password_resets` */

DROP TABLE IF EXISTS `password_resets`;

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `password_resets` */

LOCK TABLES `password_resets` WRITE;

UNLOCK TABLES;

/*Table structure for table `personal_access_tokens` */

DROP TABLE IF EXISTS `personal_access_tokens`;

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `personal_access_tokens` */

LOCK TABLES `personal_access_tokens` WRITE;

UNLOCK TABLES;

/*Table structure for table `reservas` */

DROP TABLE IF EXISTS `reservas`;

CREATE TABLE `reservas` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `actividad_id` bigint(20) unsigned DEFAULT NULL,
  `numero_personas` int(11) DEFAULT NULL,
  `precio_reserva` decimal(10,2) DEFAULT NULL,
  `fecha_reserva` date DEFAULT NULL,
  `fecha_realizacion` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `total` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reservas_actividad_id_foreign` (`actividad_id`),
  CONSTRAINT `reservas_actividad_id_foreign` FOREIGN KEY (`actividad_id`) REFERENCES `actividades` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `reservas` */

LOCK TABLES `reservas` WRITE;

insert  into `reservas`(`id`,`actividad_id`,`numero_personas`,`precio_reserva`,`fecha_reserva`,`fecha_realizacion`,`created_at`,`updated_at`,`total`) values (1,1,3,50.00,'2024-11-22',NULL,'2024-11-23 05:53:26','2024-11-23 05:53:26',150),(2,1,1,50.00,'2024-11-23',NULL,'2024-11-23 07:29:29','2024-11-23 07:29:29',50),(3,1,4,50.00,'2024-11-23',NULL,'2024-11-23 09:54:21','2024-11-23 09:54:21',200),(4,5,1,80.00,'2024-11-23',NULL,'2024-11-23 10:20:37','2024-11-23 10:20:37',80),(5,5,2,80.00,'2024-11-23',NULL,'2024-11-23 10:23:02','2024-11-23 10:23:02',160),(6,5,3,80.00,'2024-11-23',NULL,'2024-11-23 10:24:45','2024-11-23 10:24:45',240),(7,5,4,80.00,'2024-11-23',NULL,'2024-11-23 10:25:14','2024-11-23 10:25:14',320);

UNLOCK TABLES;

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `users` */

LOCK TABLES `users` WRITE;

UNLOCK TABLES;

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contraseña` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuarios_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `usuarios` */

LOCK TABLES `usuarios` WRITE;

UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
