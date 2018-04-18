<div class="account">
	<!-- IF breadcrumbs.length -->
<ol class="breadcrumb">
	<!-- BEGIN breadcrumbs -->
	<li<!-- IF @last --> component="breadcrumb/current"<!-- ENDIF @last --> itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" <!-- IF @last -->class="active"<!-- ENDIF @last -->>
		<!-- IF !@last --><a href="{breadcrumbs.url}" itemprop="url"><!-- ENDIF !@last -->
			<span itemprop="title">
				{breadcrumbs.text}
				<!-- IF @last -->
				<!-- IF !feeds:disableRSS -->
				<!-- IF rssFeedUrl --><a target="_blank" href="{rssFeedUrl}"><i class="fa fa-rss-square"></i></a><!-- ENDIF rssFeedUrl --><!-- ENDIF !feeds:disableRSS -->
				<!-- ENDIF @last -->
			</span>
		<!-- IF !@last --></a><!-- ENDIF !@last -->
	</li>
	<!-- END breadcrumbs -->
</ol>
<!-- ENDIF breadcrumbs.length -->

	<div class="profile row">
		<div class="col-xs-12">
			<div class="user-info" data-uid="{uid}">
				<!-- IF picture -->
				<img id="user-current-picture" class="user-avatar" src="{picture}" alt="{username}" />
				<!-- ELSE -->
				<div class="user-icon" style="background-color: {icon:bgColor};">{icon:text}</div>
				<!-- ENDIF picture -->
				<i component="user/status" class="fa fa-circle status {status}" title="[[global:{status}]]"></i>
				<h1 class="fullname">
					<!-- IF fullname -->{fullname}
					<!-- ELSE -->{username}
					<!-- ENDIF fullname -->
				</h1>
				<h4 class="username">
					<!-- IF !banned -->@{username}
					<!-- ELSE -->[[user:banned]]
					<!-- ENDIF !banned -->
				</h4>

				<!-- IF isAdminOrGlobalModeratorOrModerator -->
				<!-- IF banned -->
				<div class="text-center">
				<!-- IF banned_until -->
				[[user:info.banned-until, {banned_until_readable}]]
				<!-- ELSE -->
				[[user:info.banned-permanently]]
				<!-- ENDIF banned_until -->
				</div>
				<!-- ENDIF banned -->
				<!-- ENDIF isAdminOrGlobalModeratorOrModerator -->

				<!-- IF loggedIn -->
				<!-- IF !isSelf -->
				<!-- IF !banned -->
				<!-- IF !config.disableChat -->
				<a component="account/chat" href="#" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-comment-o"></i> Chat</a>
				<!-- ENDIF !config.disableChat -->
				<a id="follow-btn" component="account/follow" href="#" class="btn btn-success btn-sm <!-- IF isFollowing -->hide<!-- ENDIF isFollowing -->">[[user:follow]]</a>
				<a id="unfollow-btn" component="account/unfollow" href="#" class="btn btn-warning btn-sm <!-- IF !isFollowing -->hide<!-- ENDIF !isFollowing -->">[[user:unfollow]]</a>
				<!-- ENDIF !banned -->
				<!-- ENDIF !isSelf -->
				<!-- ENDIF loggedIn -->
			</div>

			<!-- IF aboutme -->
			<span component="aboutme" class="text-center aboutme">{aboutme}</span>
			<!-- ENDIF aboutme -->

			<div class="account-stats">
				<!-- IF !reputation:disabled -->
				<div class="stat">
					<div class="human-readable-number" title="{reputation}">{reputation}</div>
					<span class="stat-label">[[global:reputation]]</span>
				</div>
				<!-- ENDIF !reputation:disabled -->

				<div class="stat">
					<div class="human-readable-number" title="{postcount}">{postcount}</div>
					<span class="stat-label">[[global:posts]]</span>
				</div>

				<div class="stat">
					<div class="human-readable-number" title="{profileviews}">{profileviews}</div>
					<span class="stat-label">[[user:profile_views]]</span>
				</div>

				<div class="stat">
					<div class="human-readable-number" title="{followerCount}">{followerCount}</div>
					<span class="stat-label">[[user:followers]]</span>
				</div>

				<div class="stat">
					<div class="human-readable-number" title="{followingCount}">{followingCount}</div>
					<span class="stat-label">[[user:following]]</span>
				</div>
			</div>

			<div class="text-center profile-meta">
				<span>[[user:joined]]</span>
				<strong class="timeago" title="{joindateISO}"></strong>

				<span>[[user:lastonline]]</span>
				<strong class="timeago" title="{lastonlineISO}"></strong><br />

				<!-- IF email -->
				<span>[[user:email]]</span>
				<strong><i class="fa fa-eye-slash {emailClass}" title="[[user:email_hidden]]"></i> {email}</strong>
				<!-- ENDIF email -->

				<!-- IF websiteName -->
				<span>[[user:website]]</span>
				<strong><a href="{websiteLink}" rel="nofollow noopener noreferrer">{websiteName}</a></strong>
				<!-- ENDIF websiteName -->

				<!-- IF location -->
				<span>[[user:location]]</span>
				<strong>{location}</strong>
				<!-- ENDIF location -->

				<!-- IF age -->
				<span>[[user:age]]</span>
				<strong>{age}</strong>
				<!-- ENDIF age -->
			</div>
		</div>
	</div>

	<hr />
	<div class="row account-menu">
	<div class="col-xs-12">
		<ul class="nav nav-pills pull-right">
			<li>
				<a href="{config.relative_path}/user/{userslug}" class="inline-block" id="profile">[[user:profile]]</a>
			</li>
			<!-- IF showHidden -->
			<li><a href="{config.relative_path}/user/{userslug}/edit">[[user:edit]]</a></li>
			<li><a href="{config.relative_path}/user/{userslug}/settings">[[user:settings]]</a></li>
			<!-- ENDIF showHidden -->
			<li class="dropdown bottom-sheet">
				<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
			      [[user:more]] <span class="caret"></span>
			    </a>
				<ul class="dropdown-menu dropdown-menu-right">
					<!-- IF loggedIn -->
					<!-- IF !isSelf -->
					<!-- IF !banned -->
					<!-- IF !config.disableChat -->
					<li>
						<a component="account/chat" href="#">[[user:chat_with, {username}]]</a>
					</li>
					<!-- ENDIF !config.disableChat -->

					<li>
						<a component="account/flag" href="#">[[user:flag-profile]]</a>
					</li>
					<li class="divider"></li>
					<!-- ENDIF !banned -->
					<!-- ENDIF !isSelf -->
					<!-- ENDIF loggedIn -->


					<!-- IF !isSelf -->
					<!-- IF canBan -->
					<li class="<!-- IF banned -->hide<!-- ENDIF banned -->">
						<a component="account/ban" href="#">[[user:ban_account]]</a>
					</li>
					<li class="<!-- IF !banned -->hide<!-- ENDIF !banned -->">
						<a component="account/unban" href="#">[[user:unban_account]]</a>
					</li>
					<!-- ENDIF canBan -->
					<!-- IF isAdmin -->
					<li>
						<a component="account/delete" href="#" class="">[[user:delete_account]]</a>
					</li>
					<!-- ENDIF isAdmin -->
					<!-- ENDIF !isSelf -->

					<!-- IF showHidden -->
					<li><a href="{config.relative_path}/user/{userslug}/info">[[user:account_info]] <i class="fa fa-lock"></i></a></li>
					<!-- ENDIF showHidden -->

					<li class="divider"></li>
					<li><a href="{config.relative_path}/user/{userslug}/following">[[user:following]]</a></li>
					<li><a href="{config.relative_path}/user/{userslug}/followers">[[user:followers]]</a></li>
					<li class="divider"></li>
					<li><a href="{config.relative_path}/user/{userslug}/topics">[[global:topics]]</a></li>
					<li><a href="{config.relative_path}/user/{userslug}/posts">[[global:posts]]</a></li>
					<!-- IF !reputation:disabled -->
					<li><a href="{config.relative_path}/user/{userslug}/best">[[global:best]]</a></li>
					<!-- ENDIF !reputation:disabled -->
					<li><a href="{config.relative_path}/user/{userslug}/groups">[[global:header.groups]]</a></li>

					<!-- IF showHidden -->
					<li><a href="{config.relative_path}/user/{userslug}/bookmarks">[[user:bookmarks]]</a></li>
					<li><a href="{config.relative_path}/user/{userslug}/watched">[[user:watched]]</a></li>
					<li><a href="{config.relative_path}/user/{userslug}/ignored">[[user:ignored]]</a></li>
					<!-- IF !reputation:disabled -->
					<li><a href="{config.relative_path}/user/{userslug}/upvoted">[[global:upvoted]]</a></li>
					<!-- IF !downvote:disabled -->
					<li><a href="{config.relative_path}/user/{userslug}/downvoted">[[global:downvoted]]</a></li>
					<!-- ENDIF !downvote:disabled -->
					<!-- ENDIF !reputation:disabled -->
					<!-- ENDIF showHidden -->

					<!-- BEGIN profile_links -->
					<!-- IF @first -->
					<li class="divider"></li>
					<!-- ENDIF @first -->
					<li id="{profile_links.id}" class="plugin-link <!-- IF profile_links.public -->public<!-- ELSE -->private<!-- ENDIF profile_links.public -->"><a href="{config.relative_path}/user/{userslug}/{profile_links.route}"><i class="fa fa-fw {profile_links.icon}"></i> {profile_links.name}</a></li>
					<!-- END profile_links -->
				</ul>
			</li>
		</ul>
	</div>
</div>


	<div class="row">
		<div class="col-xs-12 account-block hidden">
			<div class="account-picture-block text-center">
				<span>
					<span class="account-username"> {username}</span>
				</span>

				<!-- IF !isSelf -->
				<!-- IF isFollowing -->
				<a component="account/unfollow" href="#" class="btn btn-warning btn-sm">[[user:unfollow]]</a>
				<!-- ELSE -->
				<a component="account/follow" href="#" class="btn btn-success btn-sm">[[user:follow]]</a>
				<!-- ENDIF isFollowing -->
				<!-- ENDIF !isSelf -->
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-xs-12">
			<h1 class="section-title">[[pages:account/posts, {username}]]</h1>

			<!-- IF !posts.length -->
			<div class="alert alert-warning">[[user:has_no_posts]]</div>
			<!-- ENDIF !posts.length -->
			<div component="posts" class="posts-list" data-nextstart="{nextStart}">

	<!-- BEGIN posts -->
	<div component="post" class="posts-list-item<!-- IF posts.deleted --> deleted<!-- ELSE --><!-- IF posts.topic.deleted --> deleted<!-- ENDIF posts.topic.deleted --><!-- ENDIF posts.deleted -->" data-pid="{posts.pid}" data-uid="{posts.uid}">
		<div class="post-body">
			<a class="topic-title" href="{config.relative_path}/post/{posts.pid}">
				<!-- IF !posts.isMainPost -->RE: <!-- ENDIF !posts.isMainPost -->{posts.topic.title}
			</a>

			<div component="post/content" class="content">
				{posts.content}
			</div>

			<span class="topic-category"><a href="{config.relative_path}/category/{posts.category.slug}">[[global:posted_in, {posts.category.name}]]</a></span> &bull; <span class="timeago" title="{posts.timestampISO}"></span>
		</div>
	</div>
	<!-- END posts -->
</div>
<div component="posts/loading" class="loading-indicator text-center hidden">
	<i class="fa fa-refresh fa-spin"></i>
</div>
			<!-- IF config.usePagination -->
				<div component="pagination" class="text-center pagination-container<!-- IF !pagination.pages.length --> hidden<!-- ENDIF !pagination.pages.length -->">
	<ul class="pagination hidden-xs">
		<li class="previous pull-left<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		<!-- BEGIN pagination.pages -->
			<!-- IF pagination.pages.separator -->
			<li component="pagination/select-page" class="page select-page">
				<a href="#"><i class="fa fa-ellipsis-h"></i></a>
			</li>
			<!-- ELSE -->
			<li class="page<!-- IF pagination.pages.active --> active<!-- ENDIF pagination.pages.active -->" >
				<a href="?{pagination.pages.qs}" data-page="{pagination.pages.page}">{pagination.pages.page}</a>
			</li>
			<!-- ENDIF pagination.pages.separator -->
		<!-- END pagination.pages -->

		<li class="next pull-right<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>
	</ul>

	<ul class="pagination hidden-sm hidden-md hidden-lg">
		<li class="first<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>
		</li>

		<li class="previous<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		<li component="pagination/select-page" class="page select-page">
			<a href="#">{pagination.currentPage} / {pagination.pageCount}</a>
		</li>

		<li class="next<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>

		<li class="last<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a href="?page={pagination.pageCount}" data-page="{pagination.pageCount}"><i class="fa fa-fast-forward"></i> </a>
		</li>
	</ul>
</div>
			<!-- ENDIF config.usePagination -->
		</div>
	</div>

	<div id="user-action-alert" class="alert alert-success hide"></div>
</div>
