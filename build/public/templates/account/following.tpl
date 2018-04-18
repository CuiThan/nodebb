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


	<div class="following row">
		<div class="col-xs-12">
			<h1>[[pages:{template.name}, {username}]]</h1>

			<ul id="users-container" class="users-container" data-nextstart="{nextStart}">
				<!-- BEGIN users -->
<li class="users-box registered-user" data-uid="{users.uid}">
	<a href="{config.relative_path}/user/{users.userslug}">
		<!-- IF users.picture -->
		<img class="user-avatar" src="{users.picture}" alt="{users.username}" />
		<!-- ELSE -->
		<div class="user-icon" style="background-color: {users.icon:bgColor};">{users.icon:text}</div>
		<!-- ENDIF users.picture -->
	</a>

	<div class="user-info">
		<span class="username">
			<i component="user/status" class="fa fa-circle status {users.status}" title="[[global:{users.status}]]"></i>
			<a href="{config.relative_path}/user/{users.userslug}">{users.username}</a>
		</span>

		<!-- IF section_joindate -->
		<div title="joindate" class="joindate">
			<span class="timeago" title="{users.joindateISO}"></span>
		</div>
		<!-- ENDIF section_joindate -->

		<!-- IF section_sort-reputation -->
		<div title="reputation" class="reputation">
			<i class="fa fa-star"></i>
			<span class="formatted-number">{users.reputation}</span>
		</div>
		<!-- ENDIF section_sort-reputation -->

		<!-- IF section_sort-posts -->
		<div title="post count" class="post-count">
			<i class="fa fa-pencil"></i>
			<span class="formatted-number">{users.postcount}</span>
		</div>
		<!-- ENDIF section_sort-posts -->

		<!-- IF section_flagged -->
		<div title="flag count" class="flag-count">
			<i class="fa fa-flag"></i>
			<span class="formatted-number"><a href="{config.relative_path}/posts/flags?byUsername={users.username}">{users.flags}</a></span>
		</div>
		<!-- ENDIF section_flagged -->
	</div>
</li>
<!-- END users -->
			</ul>

			<!-- IF !users.length -->
			<div class="alert alert-warning text-center">[[user:follows_no_one]]</div>
			<!-- ENDIF !users.length -->

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
		</div>
	</div>
</div>
